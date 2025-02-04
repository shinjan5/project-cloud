Cloud-Based File Storage with Encryption System

Overview

This project is a Cloud-Based File Storage with Encryption system that enables users to securely upload, store, and share files. By implementing end-to-end encryption, the system ensures that user data remains confidential and protected from unauthorized access. The application is built using Python for the backend, HTML/CSS for the frontend, and integrates cloud storage solutions for efficient file management.

Features:

* User Authentication: Secure login and registration using JWT (JSON Web Tokens).

* File Upload and Download: Users can upload files that are encrypted before being stored in the cloud.
  
 * End-to-End Encryption: Files are encrypted on the client-side using AES-256 encryption.


* Multi-Cloud Storage: Files are split into chunks and stored across multiple cloud providers for enhanced security.

* Secure File Sharing: Users can generate temporary access links to share files securely.

* Activity Monitoring: Users can view logs of their file activities.

Technologies Used:

*Frontend:*
HTML
CSS
JavaScript (with AJAX for asynchronous operations)

*Backend:*
Python (Flask or Django)
RESTful APIs

*Encryption:*
Python Cryptography Library (e.g., cryptography, PyCryptodome)
Cloud Storage:
AWS S3 or Google Cloud Storage (or any other preferred cloud provider)
Installation
Prerequisites
Make sure you have the following installed:
Python 3.x
pip (Python package installer)
Node.js (for frontend development if using npm packages)
