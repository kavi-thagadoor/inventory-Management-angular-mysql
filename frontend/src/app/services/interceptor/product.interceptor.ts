import { HttpInterceptorFn } from '@angular/common/http';

export const productInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Only apply token to product-related API endpoints
  const isProductApi = req.url.includes('/product');

  if (token && isProductApi) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
