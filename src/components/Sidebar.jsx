import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory}) => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '88%' },
            flexDirection: { md: 'column' },
            // backgroundColor: '#00000d'
        }}
    >
        {categories.map((category) => (
            <button
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#2F80ED',
                    color: 'white'
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? 'white' : '#2F80ED', marginRight: '15px' }} className='category-icon'>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar