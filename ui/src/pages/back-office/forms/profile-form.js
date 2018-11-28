import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const ProfileForm = () => (
    <form className="form flex-col" onSubmit={(event) => { event.preventDefault(); console.log('submit')}}>
        <label className="item">
            <div> Title </div>
            <Input placeholder="e.g. Yoga Tutor"/>
        </label>
        <label className="item">
            <div> Company Name </div>
            <Input placeholder="e.g. enrollify.io"/>
        </label>
        <label className="item">
            <div> Email </div>
            <Input type="email" placeholder="e.g. tutor@enrollify.com"/>
        </label>
        <Button className="item" type="submit"> Submit</Button>
    </form>
);

export default ProfileForm;