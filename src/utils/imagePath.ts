export function getImagePath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/Venkata_sai' : '';
    return `${basePath}${path}`;
  }