import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';

type RequestWithUser = ExpressRequest & { user?: Record<string, any> };

export const SalonId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number | undefined => {
    const req = ctx.switchToHttp().getRequest<RequestWithUser>();
    const user = req.user;
    return typeof user?.salonId === 'number' ? user.salonId : undefined;
  },
);
