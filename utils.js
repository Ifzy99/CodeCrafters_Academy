export function extractErrorMessage(error) {
    return error.response?.data?.error || error.message || error.toString()
  }