import './Form.module.scss';

const FormInput = (props) => {
    const{label, onChange,id,...inputProps} = props;
    return(
        <div>
            <label></label>
            <input {...inputProps} onChange={onChange}/>
        </div>
    )
}

export default FormInput;