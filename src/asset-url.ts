/** Keep original manifest paths usable at both / and a Pages project subpath. */
export function assetUrl(path:string,base=import.meta.env.BASE_URL):string {
  return base.replace(/\/?$/,'/')+path.replace(/^\/+/, '');
}
