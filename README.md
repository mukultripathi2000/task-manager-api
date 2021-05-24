# Task Manager REST API
This is a full featured Task Manager REST API back-end built with Node.js and MongoDB.  Features include:

- Pagination and filtering of server responses to avoid slow page load times.
- Full CRUD features for User and Task instances.
- Hash encryption of passwords and access management with JWT tokens.  
- Restricted user access to CRUD operations based on JWT tokens.

## API USAGE

All HTTP requests can be made from software such as [Postman](www.getpostman.com). Postman is free and exists for all major operating systems.

## ENDPOINTS


* Authorization
  * Create user                     - `POST /users`
  * Login user                      - `POST /users/login`
* User actions *
  * Logout user                     - `POST /users/logout`
  * Logout all users                - `POST /users/logoutAll`
  * Read profile                    - `GET /users/me`
  * Update user                     - `PATCH /users/me`
  * Delete user                     - `DELETE /users/me`
  * Upload avatar                   - `POST /users/me/avatar`
  * Delete avatar                   - `DELETE /users/me/avatar`
  * Get user avatar                 - `GET /users/:id/avatar`
* Task management *
  * Create task                     - `POST /tasks`
  * Read tasks                      - `GET /tasks`
    * completed       - `Boolean`
    * sortBy          - `<field_name>:asc|desc`
    * limit           - `Number`
    * skip            - `Number`
  * Read task                       - `GET /tasks/:id`
  * Update task                     - `PATCH /tasks/:id`
  * Delete task                     - `DELETE /tasks/:id`
