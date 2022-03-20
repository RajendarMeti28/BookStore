package com.miniproject.books.backend.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.books.backend.entity.Admin;
import com.miniproject.books.backend.entity.Book;
import com.miniproject.books.backend.repository.BookRepository;


@RestController
@RequestMapping("/books")
@CrossOrigin(origins="http://localhost:3000")
public class HomeController implements IController<Book> {
	
	@Autowired
	private BookRepository bookRepo;
	
	@Override
	public ResponseEntity<Optional<Book>> findById(Long id) {
		return new ResponseEntity<Optional<Book>>((Optional<Book>) bookRepo.findById(id), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Collection<Book>> findAll() {
		return new ResponseEntity<Collection<Book>>((Collection<Book>) bookRepo.findAll(), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Book> save(@RequestBody Book book){
		System.out.println(book.getAuthor());
		return new ResponseEntity<>(bookRepo.save(book), HttpStatus.CREATED);
	}
	
	@Override
	public ResponseEntity<Book> update(Book book) {
		System.out.println(book.getAuthor());
		return new ResponseEntity<>(bookRepo.save(book), HttpStatus.OK); // only difference is status code
	}
	
	@Override
	public ResponseEntity<Book> deleteById(Long id) {
		if(bookRepo.existsById(id)) {
			bookRepo.deleteById(id);
			return new ResponseEntity<Book>(HttpStatus.OK);
		}
		return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
	}
	
	@Override
	public ResponseEntity<Collection<Book>> findByTitle(String title) {
		return new ResponseEntity<Collection<Book>>((Collection<Book>) bookRepo.findByTitleContains(title), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Admin> check(@RequestBody Admin admin){
		if(admin.getUsername().equals("admin@gmail.com") && admin.getPassword().equals("admin@123")) {
			return new ResponseEntity<Admin>(HttpStatus.OK);
		}
		return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
	}

}

