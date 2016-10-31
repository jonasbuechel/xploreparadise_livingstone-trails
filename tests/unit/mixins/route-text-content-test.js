import Ember from 'ember';
import RouteTextContentMixin from 'xpp-livingstone-trails/mixins/route-text-content';
import { module, test } from 'qunit';

module('Unit | Mixin | route text content');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteTextContentObject = Ember.Object.extend(RouteTextContentMixin);
  let subject = RouteTextContentObject.create();
  assert.ok(subject);
});
