import { json } from '@remix-run/cloudflare';
import slingshotConfig from '~/config/slingshot.config';

export async function loader() {
  return json(slingshotConfig.modelConfig);
}
