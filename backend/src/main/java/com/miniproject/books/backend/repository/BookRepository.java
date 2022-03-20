package com.miniproject.books.backend.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.books.backend.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

	
	
	Collection<Book> findByTitleContains(String title);

}
