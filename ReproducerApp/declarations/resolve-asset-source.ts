import {Image} from 'react-native';

// The declaration says resolveAssetSource returns ImageResolvedAssetSource | undefined,
// so ruling out undefined is all TypeScript asks for before reading uri.
export function uriOf(assetId: number): string {
  const resolved = Image.resolveAssetSource(assetId);
  return resolved !== undefined ? resolved.uri : 'missing';
}
