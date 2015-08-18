import jQuery from 'jquery';
import {_} from 'underscore';

import TodoCollection from '../../src/js/collections/todos';
import TodoModel from '../..src/js/models/todo.js';
import TodoView from '../../src/js/views/todo-view';


describe ('TodoView', function(){
  beforeEach function(){
    this.model = new TodoModel();

    this.view = new TodoView({
      model: this.model
    });

    this.view.render();
  };

  it('should run onToggle() when box is checked', function(){
    let toggle = 'This is a test';
    let model = new TodoModel();

    this.view = new TodoView({
      collection: this.collection
  });
    this.view.onToggle(view);
      expect this.view
  });

}); //the end



// to test...
// events
//  onToggle, onDestroy, onEdit, onClose, onEscape, onEnter
// initalize
//  destroy, change:title, visible
// toggleVisible, isHidden,
//
//
