/**
 * Created by dufourau on 6/10/14.
 */

define([
    'underscore',
    'backbone',
    'models/action'
], function(_, Backbone, ActionModel){

    /**
     * Model of Disappear action
     * */
    var DisappearModel = ActionModel.extend({
        defaults: {
            type: 'disappear',
            target:null,
            trigger: null,
            duration: null
        }

    });

    return DisappearModel;
});