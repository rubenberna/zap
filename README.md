# zap

Project using fullcalendar, Vue.js and firebase

Usage:
1. Login using Zapfloor oauth api call;
2. Next component fetches the meeting rooms;
3. Selecting a meeting room from the list stores it in state and fetches the reservations with that room id;
4. Selecting an empty space in the calendar enables a new event;
5. Selecting an existing event allows you to edit it;
6. Dragging the event to another time slot changes the date/time;
7. Resizing the event in the calendar changes the duration of the event;

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
