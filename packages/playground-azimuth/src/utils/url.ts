import { Document } from '@sourcebit/sdk'

export function urlFromFilePath(doc: Omit<Document, '__computed'>): string {
  const url = doc.__meta.sourceFilePath
    .replace('content/pages/', '')
    .replace('.md', '')

  if (url === 'index') {
    return '/'
  } else {
    return url
  }
}
