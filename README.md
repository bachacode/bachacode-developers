# Bachacode Developers Website

Bachacode Developeres is a Landing Page made to show the services and general information about Bachacode Developers Group.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/bachacode/bachacode-developers.git
```

2. Navigate to the project directory:

```sh
cd bachacode-developers
```

3. Install dependencies:

```sh
npm install
```

## Usage/Examples

1. Start the development server:

```sh
npm run dev
```

2. Open your browser and visit http://localhost:3000 to view the website.

## API Reference

#### Send email through SMTP SendGrid

```http
POST /api/contacto
```

| Parameter         | Type     | Description                         |
| :---------------- | :------- | :---------------------------------- |
| `gReCaptchaToken` | `string` | **Required**. Captcha Token         |
| `name`            | `string` | **Required**. sender's name         |
| `company`         | `string` | **Optional**. sender's company name |
| `email`           | `string` | **Required**. sender's email        |
| `subject`         | `string` | **Required**. message's subject     |
| `message`         | `string` | **Optional**. message's body        |

## Deployment

1. Install dependencies and build assets

```sh
npm install && npm run build
```

2. Run server

```sh
npm run start
```

## Authors

- [@bachacode](https://www.github.com/bachacode)
