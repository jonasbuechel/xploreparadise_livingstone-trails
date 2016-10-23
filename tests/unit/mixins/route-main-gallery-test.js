import Ember from 'ember';
import RouteMainGalleryMixin from 'xpp-livingstone-trails/mixins/route-main-gallery';
import { module, test } from 'qunit';

module('Unit | Mixin | route main gallery');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteMainGalleryObject = Ember.Object.extend(RouteMainGalleryMixin);
  let subject = RouteMainGalleryObject.create();
  assert.ok(subject);
});
