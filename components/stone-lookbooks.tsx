import MaterialLookbook from '@/components/material-lookbook';
const books={
 'Walls + terraces':[{image:58,caption:'Granite blocks define planted terraces beside the house.'},{image:24,caption:'Stone walls and treads follow the garden slope.'},{image:21,caption:'Stonework connects the formal entrance and garden.'}],
 'Paths + gathering spaces':[{image:100,caption:'An informal stone path winds through pond-side planting.'},{image:24,caption:'Stone steps connect the garden’s changing levels.'},{image:81,caption:'Broad stone paving creates a place to gather beside the pool.'},{image:35,caption:'The terrace connects the pool and pool house.'}],
 'Reclaimed granite':[{image:58,caption:'Large granite blocks form raised garden beds.'},{image:85,caption:'A feature stone meets cut paving at the pool’s edge.'},{image:81,caption:'Broad granite slabs frame the gathering terrace.'}]
};
const items=[{name:'Walls + terraces',role:'Structure + landform',note:'Stone edges and planted terraces work with the slope.'},{name:'Paths + gathering spaces',role:'Movement + everyday use',note:'Steps, steppers, and terraces connect places in the garden.'},{name:'Reclaimed granite',role:'Material + craft',note:'Granite gives lasting form to beds, paths, and gathering spaces.'}];
export default function StoneLookbooks(){return <div className="structure-lookbooks"><p className="eyebrow">EXPLORE THE ALBUM</p><MaterialLookbook items={items} customBooks={books} thumbnails/></div>}
