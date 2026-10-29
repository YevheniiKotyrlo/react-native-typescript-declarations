import {Image} from 'react-native';
import {uriOf} from '../declarations/resolve-asset-source';

test('resolveAssetSource returns null for an asset id the registry does not hold', () => {
  expect(Image.resolveAssetSource(123456)).toBeNull();
});

test('code the declaration accepts reads uri of that null', () => {
  expect(() => uriOf(123456)).not.toThrow();
});
