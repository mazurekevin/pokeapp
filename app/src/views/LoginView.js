import React,{useState} from 'react';

export default ({setName}) => {
    const [name, setLocalName] = useState();
    return (
        <div className="c-page">
            <div className="c-login">
                <div className="c-box">
                    <div className="c-form">
                        <div className="u-color-white">Bienvenue sur PokeApp</div>
                        <div className="u-d-flex u-mt-xl u-justify-center">
                         
                            <input type="text" name="name" placeholder="Nom..." className="u-mr-sm"  onChange = {event => setLocalName(event.target.value)} />
                            <button type="submit" onClick={() => setName(name)}>
                                Entrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
