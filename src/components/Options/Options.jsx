import css from './Options.module.css';

const Options = ({ handleLogOptions, handleLogReset }) => {
    return (
        <div className={css.options}>
            <button className={css.button_good}
                onClick={() => { handleLogOptions("good"); }}>
                ✨Good
            </button>
            <button className={css.button_neutral}
                onClick={() => { handleLogOptions("neutral"); }}>
                🤷‍♂️Neutral
            </button>
            <button className={css.button_bad}
                onClick={() => { handleLogOptions("bad"); }}>
                😫Bad
            </button>
            <button className={css.button_reset}
                onClick={() => { handleLogReset(handleLogReset) }}>
                🔄Reset
            </button>
        </div>
    );
};

export default Options;