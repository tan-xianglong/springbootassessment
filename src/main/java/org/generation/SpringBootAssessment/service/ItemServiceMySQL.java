package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.entity.Item;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceMySQL implements ItemService {

    public ItemServiceMySQL(){}

    @Override
    public Item save (Item item) { return null; }

    @Override
    public void delete (int itemId){}

    @Override
    public List<Item> all(){ return null; }

    @Override
    public Item findById( int itemId ){ return null; }

}
