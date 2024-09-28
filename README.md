# Bsky Trends API

## Overview

The **Bsky Trends API** is an API that provides Bluesky's topic trends based on different languages. It is hosted at [bsky-trends.deno.dev](https://bsky-trends.deno.dev) and is limited to 1 request per minute per IP to ensure service availability.

## Features

- **Get Trends**: Allows you to get topic trends from Bluesky based on one or more languages (currently available languages are pt and en).

## Endpoints

### `GET /trends`

This endpoint returns topic trends for the specified languages.

#### Query Parameters

- `lang`: (optional) One or more language codes (e.g., `en`, `pt`). If not specified, the default is `pt`.

#### Example Request

```bash
curl -X GET "https://bsky-trends.deno.dev/trend?lang=en,pt"
```

#### Example Response

```json
{
    "en": {"words", "phrases", "hashtags", "globalWords"},
    "pt": {"words", "phrases", "hashtags", "globalWords"}
}
```

## Rate Limiting

The API is limited to **1 request per minute** per IP. If the limit is exceeded, the response will be:

```json
{
    "error": "Too many requests. Please try again later."
}
```

## Contribution

If you want to contribute to the API, feel free to open an [issue](https://github.com/Rafael-BD/Bsky-Trends-API/issues) or submit a [pull request](https://github.com/Rafael-BD/Bsky-Trends-API/pulls).