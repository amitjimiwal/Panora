import { DesunifyReturnType } from '@@core/utils/types/desunify.input';
import { UnifiedTeamInput, UnifiedTeamOutput } from './model.unified';
import { OriginalTeamOutput } from '@@core/utils/types/original/original.ticketing';
import { ApiResponse } from '@@core/utils/types';
import { IBaseObjectService, SyncParam } from '@@core/utils/types/interface';

export interface ITeamService extends IBaseObjectService {
  sync(data: SyncParam): Promise<ApiResponse<OriginalTeamOutput[]>>;
}

export interface ITeamMapper {
  desunify(
    source: UnifiedTeamInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): DesunifyReturnType;

  unify(
    source: OriginalTeamOutput | OriginalTeamOutput[],
    connectionId: string,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedTeamOutput | UnifiedTeamOutput[];
}
