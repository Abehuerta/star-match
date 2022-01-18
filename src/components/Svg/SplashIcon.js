import Starmatch from './Starmatch.svg';

const SplashIcon = () => {
    return (
        <div style={{
            position: 'fixed', 
            margin: 'auto', 
            textAlign: 'center',
        }}>
            <object style={{width: '300px', height: '300px', padding: '150px 100px'}} type="image/svg+xml" data={Starmatch}>svg-animation</object>
        </div>
    );
};

export default SplashIcon;