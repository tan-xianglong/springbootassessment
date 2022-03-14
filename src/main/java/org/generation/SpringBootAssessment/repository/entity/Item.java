package org.generation.SpringBootAssessment.repository.entity;


import org.generation.SpringBootAssessment.controller.dto.ItemDTO;

public class Item {

    //Needs to have the same attributes with the table
    private Integer id;
    private String title;
    private String description;
    private String date;



    public Item() {}

    public Item( ItemDTO itemDto )
    {
        this.title = itemDto.getTitle();
        this.description = itemDto.getDescription();
        this.date = itemDto.getDate();
    }

    public Integer getId() { return id; }
    public void setId( Integer id ) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle( String title ) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription( String description ) { this.description = description; }

    public String getDate() { return date; }
    public void setDate( String date ) { this.date = date; }

    @Override
    public String toString()
    {
        return "Item{" + "id=" + id + ", title='" + title + '\'' + ", description='" + description + '\'' + ", date='"
                + date + '}';
    }
}
