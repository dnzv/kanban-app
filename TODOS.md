## Mods  
Some modification ideas for Kanban app.

### 0. Make Lanes Draggable  
Integrate drag and drop functionality to Lane components.

#### a. Implement Sublanes  
Modify Lane component to either have notes or lanes.  
- Implement two different buttons, `Add Note` and `Add Lane`.
- If a Lane has notes, disable `Add Lane`. If it has lanes disable `Add Note`
- Change the topmost button to be an `Add Lane` button.

### 1. Use localForage For Persistence  
Swap `localStorage` with [localForage](https://github.com/mozilla/localForage).

### 2. Implement Custom Container  
Push [AltContainer](http://alt.js.org/docs/components/altContainer/) into a separate component.

### 3. Cleanup Lanes  
When deleting a lane, make sure to delete the associated notes as well.

### 4. Namespacing Components  
Turn Lane component into a [namespaced component](https://facebook.github.io/react/docs/jsx-in-depth.html#namespaced-components).

### 5. Misc.  
- [ ] Implement `removeNote(noteId)`  
It will go through `LaneStore` and get rid of the specified note if it finds it by id

- [ ] Drop `detachFromLane`  
After implementing `removeNote`
