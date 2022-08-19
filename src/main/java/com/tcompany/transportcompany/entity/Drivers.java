package com.tcompany.transportcompany.entity;

import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "trucks")
public class Drivers {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @Field(name = "name")
    private String name;

    @Field(name = "surname")
    private String surname;

    public String toString() {
        return "id: " + id + "\nname: " + name + "\nsurname: " + surname;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

}
