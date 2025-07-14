# Pet Salon SaaS - MVP Architecture Plan

## Executive Summary
A 2-week MVP focused on core scheduling functionality with basic CRUD operations for clients, pets, services, and appointments. Authentication will be simple (email/password), and advanced features will be deferred to post-MVP.

## Core Domain Model

### Primary Entities
- **Salon** (tenant isolation)
- **Client** (pet owner)
- **Pet** (belongs to client)
- **Service** (grooming, nail trim, bath, etc.)
- **Employee** (staff member)
- **Room** (physical space)
- **Equipment** (grooming tools, tables, etc.)
- **Appointment** (scheduled service for a pet)

### Key Relationships
- Salon → many Clients, Services, Employees, Rooms, Equipment
- Client → many Pets
- Appointment → one Pet, one Service, one Employee, one Room
- Equipment → can be assigned to Rooms

## Technical Architecture

### Backend (NestJS)
```
src/
├── auth/                 # Authentication & JWT
├── modules/
│   ├── salon/           # Salon management
│   ├── client/          # Client CRUD
│   ├── pet/             # Pet CRUD
│   ├── service/         # Service CRUD
│   ├── employee/        # Employee CRUD
│   ├── room/            # Room CRUD
│   ├── equipment/       # Equipment CRUD
│   └── appointment/     # Appointment scheduling
├── common/
│   ├── guards/          # Auth guards
│   ├── decorators/      # Custom decorators
│   └── filters/         # Exception filters
└── database/
    └── migrations/      # Database schema
```

### Frontend (React/Next.js)
```
src/
├── components/
│   ├── common/          # Shared UI components
│   ├── layout/          # Layout components
│   └── forms/           # Form components
├── pages/
│   ├── dashboard/       # Main dashboard
│   ├── clients/         # Client management
│   ├── pets/            # Pet management
│   ├── services/        # Service management
│   ├── staff/           # Employee management
│   ├── resources/       # Rooms & Equipment
│   └── appointments/    # Scheduling interface
├── hooks/               # Custom React hooks
├── services/            # API service layer
└── store/               # State management (React Query/Zustand)
```

## MVP Feature Set

### Week 1 Priorities
1. **Authentication System**
   - Login only (email/password) - no registration needed
   - JWT token management
   - Single user per salon (salon owner)

2. **Core CRUD Operations**
   - Client management (add, edit, delete, list)
   - Pet management (linked to clients)
   - Service management (name, description, price, duration)
   - Employee management (basic info only)

3. **Basic UI Framework**
   - Dashboard layout
   - Navigation structure
   - Form components
   - Data tables

### Week 2 Priorities
1. **Resource Management**
   - Room management (basic info)
   - Equipment management (basic info)

2. **Appointment Scheduling**
   - Simple calendar view (day/week view)
   - Create appointment (pet + service + employee + room)
   - Edit/cancel appointments
   - Basic availability checking

3. **Data Visualization**
   - Simple dashboard with key metrics
   - Appointment overview
   - Revenue summary

## Technical Implementation Details

### Database Schema (PostgreSQL)
```sql
-- Core tables for MVP
- users (id, salon_id, email, password_hash, name, created_at, updated_at)
- salons (id, name, address, phone, created_at, updated_at)
- clients (id, salon_id, name, email, phone, address)
- pets (id, client_id, name, breed, age, notes)
- services (id, salon_id, name, description, price, duration_minutes)
- employees (id, salon_id, name, email, phone)
- rooms (id, salon_id, name, capacity)
- equipment (id, salon_id, name, room_id)
- appointments (id, salon_id, pet_id, service_id, employee_id, room_id, start_time, end_time, status, notes)
```

### API Design
- RESTful endpoints for each entity
- Consistent response format
- Proper HTTP status codes
- Basic pagination for list endpoints

### Authentication & Authorization
- JWT-based authentication
- Salon-level tenant isolation
- Single user per salon (pre-configured by technician)
- Login-only flow (no registration)
- Middleware for request authorization

## Non-Functional Requirements

### Security
- **Authentication**: JWT tokens with reasonable expiration
- **Authorization**: Salon-level data isolation
- **Data Validation**: Input sanitization and validation
- **HTTPS**: SSL/TLS encryption
- **Environment Variables**: Secure configuration management

### Performance
- **Database**: Proper indexing on foreign keys and query fields
- **Caching**: Basic Redis caching for frequently accessed data
- **Pagination**: Implement pagination for large datasets
- **Query Optimization**: Use proper database relations and eager loading

### Scalability Considerations
- **Multi-tenancy**: Salon-level data isolation (prepare for future scaling)
- **Database**: PostgreSQL with proper indexing
- **Architecture**: Modular NestJS structure for easy feature addition

### Monitoring & Logging
- **Application Logging**: Winston logger with different levels
- **Error Tracking**: Basic error logging and handling
- **Health Checks**: API health endpoints
- **Basic Metrics**: Response times and error rates

## Deployment Strategy

### Infrastructure (MVP)
- **Hosting**: Single cloud instance (AWS/DigitalOcean)
- **Database**: Managed PostgreSQL instance
- **Frontend**: Static hosting (Vercel/Netlify)
- **Cache**: Redis instance for sessions

### Deployment Strategy (MVP)

#### Manual Deployment (Week 1-2)
- **Backend**: Deploy NestJS app to cloud instance via SSH/SCP
- **Frontend**: Build locally and deploy to static hosting (Vercel/Netlify)
- **Database**: Run migrations manually via SSH

#### Simple CI/CD (Post-MVP - Week 3+)
- **Version Control**: Git with feature branches
- **Backend**: GitHub Actions → Build → Deploy to cloud instance
- **Frontend**: Auto-deploy on push to main (Vercel/Netlify built-in)
- **Database**: Automated migrations via deployment scripts
- **Testing**: Unit tests for critical business logic
- **Environment**: Development and Production environments

### Monitoring
- **Uptime Monitoring**: Basic health checks
- **Error Tracking**: Application error logging
- **Performance**: Basic response time monitoring

## Development Timeline

### Week 1 (Backend Focus)
- **Days 1-2**: Project setup, database design, authentication (login only)
- **Days 3-4**: Core CRUD APIs (clients, pets, services, employees)
- **Days 5-7**: Frontend setup, basic components, login UI

### Week 2 (Integration & Polish)
- **Days 8-9**: Appointment scheduling API and UI
- **Days 10-11**: Resource management (rooms, equipment)
- **Days 12-13**: Dashboard, testing, manual deployment setup
- **Day 14**: Demo preparation, final deployment

### Week 3+ (Post-MVP)
- **CI/CD Pipeline**: Automated deployment setup
- **Advanced Features**: Based on investor feedback

## Post-MVP Considerations

### Immediate Next Features
- Advanced scheduling (recurring appointments, time blocks)
- Employee role management
- Payment integration
- SMS/Email notifications
- Inventory management
- Reporting and analytics

### Technical Debt to Address
- Comprehensive testing suite
- Advanced caching strategies
- Database optimization
- Security audit
- Performance optimization
- Mobile responsiveness

## Risk Assessment

### Technical Risks
- **Database Design**: Ensure schema can handle future requirements
- **Authentication**: Keep it simple but secure for MVP
- **Scheduling Logic**: Basic availability checking might need refinement

### Mitigation Strategies
- Focus on core functionality first
- Use established libraries and patterns
- Plan for iterative improvements
- Maintain clean, documented code

## Success Metrics for MVP Demo

### Functional Metrics
- Successfully create and manage clients and pets
- Schedule appointments with proper resource allocation
- Display appointments in calendar view
- Basic reporting (appointments, revenue)

### Technical Metrics
- API response times under 200ms
- Zero critical security vulnerabilities
- 95% uptime during demo period
- Clean, maintainable codebase

This architecture provides a solid foundation for your 2-week MVP while maintaining the flexibility to scale and add features post-launch.