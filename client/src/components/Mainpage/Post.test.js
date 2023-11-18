import React from 'react';
import { handleLike, addComments } from './Post'; 
import LikeIcon from "../Images/like.png";
import anotherlikeicon from "../Images/setLike.png";
import { render, fireEvent, screen } from '@testing-library/react';
import Post from './Post'
describe('Post Component Logic', () => {
    test('handleLike toggles like state and count', () => {
        const mockSetLike = jest.fn();
        const mockSetCount = jest.fn();
        handleLike(LikeIcon, mockSetLike, mockSetCount);
        expect(mockSetLike).toHaveBeenCalledWith(anotherlikeicon);
        expect(mockSetCount).toHaveBeenCalledWith(1);

        handleLike(anotherlikeicon, mockSetLike, mockSetCount);
        expect(mockSetLike).toHaveBeenCalledWith(LikeIcon);
        expect(mockSetCount).toHaveBeenCalledWith(0);
    });


    test('addComments updates the Comments array', () => {
        const mockSetComments = jest.fn();
        addComments([], mockSetComments, 'Test comment');
        expect(mockSetComments).toHaveBeenCalledWith([{ id: "4a4232342cs41312419012834", username: "user1", title: 'Test comment' }]);
    });

    test('initial render and element presence', () => {
        render(<Post />);
        expect(screen.getByAltText('Like')).toBeInTheDocument();
        expect(screen.getByAltText('Comment')).toBeInTheDocument();
        expect(screen.getByAltText('Share')).toBeInTheDocument();
        expect(screen.getByText('Hey everyone! First post on here!')).toBeInTheDocument();
    });

    test('profile and post content display', () => {
        render(<Post />);
        expect(screen.getByText('Chris')).toBeInTheDocument();
        expect(screen.getByText('Hey everyone! First post on here!')).toBeInTheDocument();
        const profileImages = screen.getAllByAltText('');
        expect(profileImages.length).toBeGreaterThan(0);
    });

    test('initial render and element presence', () => {
        render(<Post />);
        expect(screen.getByAltText('Like')).toBeInTheDocument();
        expect(screen.getByAltText('Comment')).toBeInTheDocument();
        expect(screen.getByAltText('Share')).toBeInTheDocument();
        expect(screen.getByText('Hey everyone! First post on here!')).toBeInTheDocument();
    });

    test('comment writing and submission', () => {
        render(<Post />);
        fireEvent.click(screen.getByAltText('Comment'));
        const commentInput = screen.getByPlaceholderText('write your comment');
        fireEvent.change(commentInput, { target: { value: 'Test comment' } });
        fireEvent.click(screen.getByText('Comment'));
        expect(screen.getByText('Test comment')).toBeInTheDocument();
    });

});
