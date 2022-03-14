package org.generation.SpringBootAssessment.controller;

import org.generation.SpringBootAssessment.controller.dto.ItemDTO;
import org.generation.SpringBootAssessment.repository.entity.Item;
import org.generation.SpringBootAssessment.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;

    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<Item> getItems()
    {
        return itemService.all();
    }

    @CrossOrigin
    @GetMapping( "/{id}" )
    public Item findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestParam(name="title", required = true) String title,
                     @RequestParam(name="description", required = true) String description,
                     @RequestParam(name="date", required = true) String date) throws IOException {

        ItemDTO itemDto = new ItemDTO(title, description, date);
        itemService.save(new Item(itemDto));
    }


}

