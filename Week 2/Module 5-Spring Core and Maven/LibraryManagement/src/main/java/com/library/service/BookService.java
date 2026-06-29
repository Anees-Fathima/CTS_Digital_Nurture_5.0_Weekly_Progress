package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    //Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    //Exercise: 2
    public void serviceMethod() {

        if (bookRepository != null) {
            System.out.println("Dependency Injection Successful!");
        } else {
            System.out.println("Dependency Injection Failed!");
        }

        System.out.println("BookService object created");
        bookRepository.display();
    }

//    Exercise: 1
//    public void displayService() {
//        System.out.println("Book Service Bean Created");
//        bookRepository.displayRepository();
//    }
}