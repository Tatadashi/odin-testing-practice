import { capitalize } from './capitalize.js'

test('capitalizes cat to Cat', () => {
    expect(capitalize('cat')).toMatch('Cat');
});