import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default function ListItems({ playlists }) {
  return (
    <ScrollView>
      {Object.keys(playlists).map((playlist, number) => (
        <ListItem
          key={[number, playlist].join('_')}
          number={number + 1}
          text={playlist}
          description={new Date(playlists[playlist].date).toLocaleDateString()}
          tooltip={`${playlists[playlist].wordsCount} слов`}
          listTitle={`${number === 0 ? 'Другие плейлисты:' : ''}`}
          hideBorder
        />
      ))}
    </ScrollView>
  );
}

ListItems.propTypes = {
  playlists: PropTypes.shape({}).isRequired
};
