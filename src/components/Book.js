import { useLocation, useParams } from "react-router";

import styles from '../css/Book.module.css'

import BookCalendly from "./BookCalendly";
import BookEmail from "./BookEmail";
import BookPhone from "./BookPhone";

export default function Book() {
    return (
        <>
            <h1>Book Your Next Session!</h1>

            <p>Pick one of the options below to begin your game development journey:</p>

            <BookEmail />
            <BookPhone />
            <BookCalendly />
        </>
    );
}