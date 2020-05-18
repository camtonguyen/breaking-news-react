/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';

const Story = ({ storyId }) => {

    return storyId && storyId.url ? (
        <Fragment>
            <p>{storyId.title}</p>
            <p>By: {storyId.by}</p>
        </Fragment>
    ) : null;
}

export default Story;
