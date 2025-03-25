export function getImagePath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/venata_sai' : '';
    return `${basePath}${path}`;
  }