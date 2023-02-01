---
title: Hello World
date: 2023/02/01
description: An introduction
tag: home
author: Violet
---

Hello World :D

Here is me in some languages I know:
```typescript
interface Person {
    name: string,
    age: number,
    interests: string[],
    pronouns: string[],
}

const me: Person = {
    name: "Violet",
    age: 16,
    interests: ["math", "physics", "programming", "literature", "history"],
    pronouns: ["she", "they"]
};
```
```python
class Person:
    def __init__(self, name: str, age: int, interests: list, pronouns: list):
        self.interests = interests
        self.pronouns = pronouns
        self.name = name
        self.age = age

me = Person(
    name="Violet",
    age=16,
    interests=["math", "physics", "programming", "literature", "history"],
    pronouns=["she", "they"]
)
```
```c
typedef struct
{
    char *name;
    int age;
    char *interests[5];
    char *pronouns[2];
} Person;

int main()
{
    Person Violet = {
        "Violet",
        16,
        {"math", "physics", "programming", "literature", "history"},
        { "she", "they" }
    };
}
```