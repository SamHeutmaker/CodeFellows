Tasks = new Meteor.Collection('tasks');

if (Meteor.isClient) {

  Template.body.helpers({
    tasks : function() {
      return Tasks.find({}, {sort : {createAt: -1}});

    }
  });
  

  Template.body.events({
    "submit .new-task": function(e) {
      e.preventDefault();

      var text = e.target.text.value;

      Tasks.insert({
        text: text,
        createAt: new Date()
      })

      e.target.text.value = "";

    }
  });


 Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });
}
