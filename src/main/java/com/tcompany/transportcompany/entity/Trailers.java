package com.tcompany.transportcompany.entity;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Collection;

@Document(collection = "trailers")
public class Trailers {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @Field(name = "truck")
    private String truck;

    @Field(name = "cargo")
    private String cargo;

    @Field(name = "location")
    private String location;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTruck() {
        return truck;
    }

    public void setTruck(String truck) {
        this.truck = truck;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
