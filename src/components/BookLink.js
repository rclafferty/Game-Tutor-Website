export default function BookLink({link, title, displayTextLine1, displayTextLine2}) {

    return (
        <>
            <button className={`wide`} onClick={() => { window.location.href=link; }} title={title} target="_blank" rel="noopener noreferrer">{displayTextLine1}<br />{displayTextLine2}</button>
        </>
    );
}