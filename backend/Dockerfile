FROM composer:2.7 AS build
WORKDIR /var/www/html
COPY . .
RUN composer install

FROM php:8.2-fpm
WORKDIR /var/www/html
COPY --from=build /var/www/html /var/www/html
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd
RUN php artisan storage:link    
COPY --from=build /var/www/html /var/www/html
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
