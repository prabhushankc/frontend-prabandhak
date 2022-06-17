import React from 'react'
import { CardMedia, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import useStyle from './FoodHeaderPageStyle'
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getFoodBySearch, fetchFoodPage } from '../../../redux/actions/foodPageaction';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const FoodHeaderPage = ({ foodLength }) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = React.useState(null);
    const [sort, setSort] = React.useState('createdAt');
    const query = useQuery();
    const searchFood = query.get('title');
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        if (searchFood) {
            return () => {
                dispatch(getFoodBySearch({ search: searchFood, tags: tags.join(',') }));
            }
        }
    }, [dispatch, searchFood]);

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getFoodBySearch({ search, tags: tags.join(',') }));
            setSearch('');
        } else {
            navigate('/food');
        }
    };

    const handleKeyPress = (e) => {
        e.preventDefault();
        searchPost();
    };
    const handleSort = async (e) => {
        e.preventDefault();
        setSort(e.target.value);
        const foodquery = {
            page: 1,
            limit: 4,
            sort: e.target.value,
        };
        await dispatch(fetchFoodPage(foodquery));
    };
    return (
        <>
            <div className={classes.design} >
                <CardMedia className={classes.media} style={{ backgroundImage: 'url(https://visitorlando.widen.net/content/mdw0wxwqjb/jpeg/188815-table2.jpg?position=c&crop=true&color=ffffff&quality=80&w=1920&h=1252)' }} title='prabandak' />
                <Typography className={classes.title} variant="h5" component="h2">prabandak Hotel</Typography>
                <Typography className={classes.detail} variant="h5" component="h2">Home - Food</Typography>
            </div>
            <div className={classes.search}>
                <div className={classes.foodResult}>Showing 1-4 of {foodLength} results</div>
                <form autoComplete='off' onSubmit={handleKeyPress}>
                    <TextField
                        placeholder="Search in Prabandak"
                        onChange={(e) => setSearch(e.target.value)}
                        className={classes.textFieldSearch}
                        focused
                        variant="standard"
                        value={search}
                        name="search"
                    />
                </form>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sort} onChange={handleSort}>
                        <MenuItem value={'createdAt'}>Newest Product</MenuItem>
                        <MenuItem value={'-createdAt'}>Oldest Product</MenuItem>
                        {/* price */}
                        <MenuItem value={'-price'}>Price: High to Low </MenuItem>
                        <MenuItem value={'price'}>Price: Low to High</MenuItem>
                        {/* best Sold */}
                        <MenuItem value={'-sold'}>Best Sales</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default FoodHeaderPage