import UserEntity from "../../shared/providers/email/google/domain/entities/user.entity";

declare global {
  namespace Express {
    interface User extends UserEntity { }
  }
}