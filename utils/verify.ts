import * as _ from 'lodash';
import { getUserObject } from './getUserObject';
import { recipeGraphQL } from '../graphql/queries/recipe';
import { userLikeGraphQL } from '../graphql/queries/userLike';
import { recipesGraphQL } from '../graphql/queries/recipes';
import { graphQLClient } from '../pages/api/graphql';
import { print } from "graphql";

export const verifyNotABannedMutation = async (req, res) => {
  const isBannedMutation = req.body.query.match(
    /deleteMany|updateMany|publishMany/g
  );

  if (!_.isNil(isBannedMutation)) {
    throw new Error("Invalid Mutation Requested");
  }
};