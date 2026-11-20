// TODO(reto): archivo stubbeado; implementa los cuerpos.
import type { ServerError } from '../../core/models/ServerError';
import type { UserFriendlyError } from '../../core/models/UserFriendlyError';

export class ErrorMappingService {
  mapServerError(error: ServerError): UserFriendlyError {
    throw new Error('TODO(reto): mapServerError');
  }

  private mapUnknownError(error: ServerError): UserFriendlyError {
    throw new Error('TODO(reto): mapUnknownError');
  }

  mapValidationErrors(details?: Record<string, unknown>): UserFriendlyError {
    throw new Error('TODO(reto): mapValidationErrors');
  }

  mapNetworkError(): UserFriendlyError {
    throw new Error('TODO(reto): mapNetworkError');
  }

  mapTimeoutError(): UserFriendlyError {
    throw new Error('TODO(reto): mapTimeoutError');
  }
}

export const errorMappingService = new ErrorMappingService();