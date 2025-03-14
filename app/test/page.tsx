'use client';

import Dropdown from 'src/components/Common/Dropdown';
import Icon from 'src/components/Icons/Icon';

export default function Test() {
  function onClick() {}
  return (
    <div>
      <div className='flex flex-col gap-y-10'>
        <div>
          <h3>type (select, link)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              buttonText='별점'
              menuItems={[
                { label: '전체', onClick },
                {
                  label: (
                    <div className='flex'>
                      {[1].map((n) => (
                        <Icon
                          key={`1-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2].map((n) => (
                        <Icon
                          key={`2-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2, 3].map((n) => (
                        <Icon
                          key={`3-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2, 3, 4].map((n) => (
                        <Icon
                          key={`4-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Icon
                          key={`5-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
              ]}
            />
            <Dropdown
              type='link'
              buttonText='컬처스팟 님'
              menuItems={[
                { label: '마이 페이지', onClick },
                { label: '로그인', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>Select (buttonText='별점', buttonText=null)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              buttonText='별점'
              menuItems={[
                { label: '전체', onClick },
                {
                  label: (
                    <div className='flex'>
                      {[1].map((n) => (
                        <Icon
                          key={`1-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2].map((n) => (
                        <Icon
                          key={`2-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2, 3].map((n) => (
                        <Icon
                          key={`3-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2, 3, 4].map((n) => (
                        <Icon
                          key={`4-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
                {
                  label: (
                    <div className='flex'>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Icon
                          key={`5-${n}`}
                          name='STAR'
                          size={16}
                          className='fill-yellow-400 stroke-yellow-400'
                        />
                      ))}
                    </div>
                  ),
                  onClick,
                },
              ]}
            />
            <Dropdown
              type='select'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>buttonWidth (default, sm)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              buttonWidth='default'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              buttonWidth='sm'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              buttonWidth='lg'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              buttonWidth='fit'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>buttonHeight (default, sm, fit)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              buttonHeight='sm'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              buttonHeight='fit'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>fontSize (default, sm)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              fontSize='sm'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>hideButtonBorder, hideIcon</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              hideButtonBorder
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              hideIcon
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>menuWidth (default, sm, lg, fit)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              menuWidth='default'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuWidth='sm'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuWidth='lg'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuWidth='fit'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>menuHeight (default, sm, lg, fit)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuHeight='sm'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuHeight='lg'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuHeight='fit'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
        <div>
          <h3>menuAlign (right, left)</h3>
          <div className='flex gap-x-8'>
            <Dropdown
              type='select'
              menuWidth='lg'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
            <Dropdown
              type='select'
              menuWidth='lg'
              menuAlign='left'
              menuItems={[
                { label: '최신 순', onClick },
                { label: '오래된 순', onClick },
                { label: '좋아요 순', onClick },
                { label: '댓글 많은 순', onClick },
              ]}
            />
          </div>
          <div className='margin'></div>
        </div>
      </div>
      <style>{`.margin {height: 250px;}`}</style>
    </div>
  );
}
