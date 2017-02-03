# Interwatch

Toy project/in-progress attempt at making an arbitrarily nested/complex HIT/Interval timer app.

## Plan

Users design an arbitrarily nested tree of timers/containers:

```
                 _____________
                |-----SET1----|
            --- |   REPS: 2   |--
            |   |_____________| |
       _____|______      _______|___        
      |---TIMER1--|     |----SET2---|
      |  DUR: 30s |     | REPS: 1   |
      |  REPS: 1  |     |           |
      |___________|     |___________|
                              |
                         _____|_____    
                        |---TIMER2--|
                        |  DUR: 30s |
                        |  REPS: 1  |
                        |___________|
      
      
      
```

which is turned into a time line of intervals:

```
                        SET1
|--------------------------------------------------|
   TIMER 1      SET2        TIMER 1        SET2
|-----------||-----------||-----------||-----------|
                TIMER2                    TIMER2
             |-----------|             |-----------|

            30s          60s          90s         120s     
=========================================================>
```

[Data Structure](src/engine)

