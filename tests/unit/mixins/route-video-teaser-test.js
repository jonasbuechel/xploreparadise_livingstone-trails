import Ember from 'ember';
import RouteVideoTeaserMixin from 'xpp-livingstone-trails/mixins/route-video-teaser';
import { module, test } from 'qunit';

module('Unit | Mixin | route video teaser');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteVideoTeaserObject = Ember.Object.extend(RouteVideoTeaserMixin);
  let subject = RouteVideoTeaserObject.create();
  assert.ok(subject);
});
